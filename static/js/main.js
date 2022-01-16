const APP_ID = "2a962873811a43968b470dc3a38fa074";
const CHANNEL = "main";
const TOKEN =  "0062a962873811a43968b470dc3a38fa074IAAebRnV6Me9BIjRyTg3VC8Ttyx31ZXl/F2ULCj2YknWO2TNKL8AAAAAEACBgxuC3IfkYQEAAQDch+Rh";
let UID;

// create client object from agora

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

// to store local audio and video tracks
let localTracks = [];
let remoteUsers = {};

let joinAndDisplayLocalStream = async () => {
  // joined the channel
  UID = await client.join(APP_ID, CHANNEL, TOKEN, null);
  // gets audio and video tracks then returns an array
  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
  let player = `<div class="video-container" id="user-container-${UID}">
      <div class="username-wrapper"><span class="username">Moyo</span></div>
      <div class="video-stream" id="user-${UID}"></div>
    </div>`;
  document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
  // to play video track
  localTracks[1].play(`user-${UID}`)

  // publish audio and video tracks for other people on the channel
  await client.publish([localTracks[0], localTracks[1]])



};
