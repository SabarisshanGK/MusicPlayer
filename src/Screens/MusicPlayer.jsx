import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors, width} from '../../assets/Theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import songs from '../../assets/Datas/songs';
import MovieImageComponent from '../Components/MovieImageComponent/MovieImageComponent';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useProgress,
  RepeatMode,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const setUpPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
  });
  await TrackPlayer.add(songs);
};

const TogglePlay = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack != null) {
    if (playBackState == State.Ready || playBackState == State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const MusicPlayer = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [repeatMode, setRepeatMode] = useState('off');
  const [songIndex, setSongIndex] = useState(0);
  const sliderRef = useRef(null);
  const [name, setName] = useState();
  const [artistName, setArtistName] = useState();
  const [image, setImage] = useState();

  const repeatIconName = () => {
    if (repeatMode === 'off') {
      return 'repeat-off';
    }
    if (repeatMode === 'track') {
      return 'repeat-once';
    }
    if (repeatMode === 'repeat') {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode === 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }
    if (repeatMode === 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }
    if (repeatMode === 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist} = track;
      setName(title);
      setImage(artwork);
      setArtistName(artist);
    }
  });

  const skipTo = async trackid => {
    await TrackPlayer.skip(trackid);
  };

  useEffect(() => {
    setUpPlayer();
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setSongIndex(index);
      skipTo(index);
    });

    return () => {
      scrollX.removeAllListeners();
      //TrackPlayer.destroy();
    };
  }, []);

  const skipToNextSong = () => {
    sliderRef.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const goToPreviousSong = () => {
    sliderRef.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const playBackState = usePlaybackState();
  const progress = useProgress();
  return (
    <View style={styles.container}>
      <View style={styles.musicPlayerContainer}>
        <View style={{width: width, marginTop: 100}}>
          <Animated.FlatList
            ref={sliderRef}
            data={songs}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            scrollEventThrottle={16}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return <MovieImageComponent item={item} image={image} />;
            }}
          />
        </View>
        {/* Song Details */}
        <View style={styles.detailContainer}>
          <Text style={styles.songName}>{name}</Text>
          <Text style={styles.artistName}>{artistName}</Text>
        </View>

        {/* Slider */}

        <View>
          <Slider
            style={styles.progressBar}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor={colors.lightBlue}
            minimumTrackTintColor={colors.lightBlue}
            maximumTrackTintColor={colors.white}
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />

          {/* Song timing  */}

          <View style={styles.timing}>
            <Text style={styles.timeText}>
              {new Date(progress.position * 1000)
                .toISOString()
                .substring(14, 19)}
            </Text>
            <Text style={styles.timeText}>
              {new Date((progress.duration - progress.position) * 1000)
                .toISOString()
                .substring(14, 19)}
            </Text>
          </View>
        </View>
        {/* Song Controls */}

        <View style={styles.controlContainer}>
          <TouchableOpacity onPress={goToPreviousSong}>
            <MaterialIcons
              name="skip-previous"
              size={44}
              color={colors.lightBlue}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TogglePlay(playBackState)}>
            <Ionicons
              name={
                playBackState === State.Playing
                  ? 'ios-pause-circle'
                  : 'ios-play-circle'
              }
              size={64}
              color={colors.lightBlue}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNextSong}>
            <MaterialIcons
              name="skip-next"
              size={44}
              color={colors.lightBlue}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={28} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={changeRepeatMode}>
          <MaterialCommunityIcons
            name={`${repeatIconName()}`}
            size={28}
            color={repeatMode === 'off' ? colors.white : colors.lightBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="share" size={28} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={28} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  musicPlayerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 50,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    paddingTop: 20,
  },
  songName: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  artistName: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.6,
    fontWeight: '200',
    textAlign: 'center',
  },
  progressBar: {
    width: 350,
    height: 40,
    marginTop: 5,
  },
  timing: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    color: colors.white,
    opacity: 0.5,
  },
  controlContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 30,
  },
});
