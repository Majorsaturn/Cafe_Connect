import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

const AudioScreen = ({ fbApp }) => {
  const [sound, setSound] = useState(null); // Holds the current sound object
  const [isPlaying, setIsPlaying] = useState(false); // Controls play/pause state
  const [currentTrack, setCurrentTrack] = useState(0); // Tracks the current audio index

  const audioFiles = [
    require("../assets/lofi-study-calm-peaceful-chill-hop-112191.mp3"),
    require("../assets/good-night-lofi-cozy-chill-music-160166.mp3"),
    // Add more audio files here
  ];

  const trackNames = [
    "Lofi Study",
    "Good Night"
    // Add corresponding track names here
  ];

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Cleanup sound when the component unmounts
        }
      : undefined;
  }, [sound]);

  const playPauseAudio = async () => {
    if (sound === null) {
      const { sound: newSound } = await Audio.Sound.createAsync(audioFiles[currentTrack]);
      setSound(newSound);
      setIsPlaying(true);
      await newSound.playAsync();
    } else {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipToNext = async () => {
    if (sound) await sound.unloadAsync();
    setIsPlaying(false);
    const nextTrack = (currentTrack + 1) % audioFiles.length;
    setCurrentTrack(nextTrack);
    const { sound: newSound } = await Audio.Sound.createAsync(audioFiles[nextTrack]);
    setSound(newSound);
    setIsPlaying(true);
    await newSound.playAsync();
  };

  const skipToPrevious = async () => {
    if (sound) await sound.unloadAsync();
    setIsPlaying(false);
    const prevTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
    setCurrentTrack(prevTrack);
    const { sound: newSound } = await Audio.Sound.createAsync(audioFiles[prevTrack]);
    setSound(newSound);
    setIsPlaying(true);
    await newSound.playAsync();
  };

  return (
    <View style={styles.audioPage}>
      <Image style={styles.image5Icon} resizeMode="cover" source={require("../assets/image 5.png")} />
      <Image style={styles.profileIcon} resizeMode="cover" source={require("../assets/profile icon.png")} />
      <Text style={styles.ambientSounds}>AMBIENT SOUNDS</Text>
      <View style={styles.media}> 
      {/* Display current track name */}
      <Text style={styles.trackName}>{trackNames[currentTrack]}</Text>

      <View style={styles.mediaPlayer}>
        <TouchableOpacity onPress={skipToPrevious}>
          <Image style={styles.solarskipPreviousOutlineIcon} source={require("../assets/solar-skip-previous-outline.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playPauseAudio}>
          <Image
            style={styles.solarplayOutlineIcon}
            source={
              isPlaying
                ? require("../assets/solar-pause-outline.png") // Use a pause icon when playing
                : require("../assets/solar-play-outline.png") // Use a play icon when paused
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={skipToNext}>
          <Image style={styles.solarskipNextOutlineIcon} source={require("../assets/solar-skip-next-outline.png")} />
        </TouchableOpacity>
      </View>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  audioPage: {
    backgroundColor: "#face8b",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image5Icon: {
    top: 0,
    left: 0,
    opacity: 1,
    position: "absolute",
  },
  profileIcon: {
    position: "relative",
    top: "-23.8%",
    left: "-39.3%",
  },
  ambientSounds: {
    fontSize: 36,
    top: "-24%",
    fontWeight: "700",
    fontFamily: "JosefinSlab-Bold",
    color: "#000",
    marginBottom: 20,
  },
  trackName: {
    fontSize: 18,
    color: "#fff", // Text color
    top: "-5%",
    fontWeight: "500",
    paddingHorizontal: 15, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 25, // Rounds the corners
    textAlign: "center", // Centers the text
  },
  mediaPlayer: {
    top: "-10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
    marginTop: 50,
  },
  solarskipPreviousOutlineIcon: {
    width: 50,
    height: 50,
  },
  solarplayOutlineIcon: {
    width: 50,
    height: 50,
  },
  solarskipNextOutlineIcon: {
    width: 50,
    height: 50,
  },
  media: {
    fontSize: 18,
    color: "#fff", // Text color
    top: "-20%",
    fontWeight: "500",
    backgroundColor: "#9c6f44", // Background color
    paddingHorizontal: 15, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 25, // Rounds the corners
    textAlign: "center", // Centers the text
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
  }
});

export default AudioScreen;
