import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="keys">
        <div data-key="65" className="key key65">
          <kbd>A</kbd>
          <span className="sound">atumalaca</span>
        </div>
        <div data-key="83" className="key key83">
          <kbd>S</kbd>
          <span className="sound">cavalo</span>
        </div>
        <div data-key="68" className="key key68">
          <kbd>D</kbd>
          <span className="sound">ele gosta</span>
        </div>
        <div data-key="70" className="key key70">
          <kbd>F</kbd>
          <span className="sound">coringa</span>
        </div>
        <div data-key="71" className="key key71">
          <kbd>G</kbd>
          <span className="sound">por que será</span>
        </div>
        <div data-key="72" className="key key72">
          <kbd>H</kbd>
          <span className="sound">Faz o L</span>
        </div>
      </div>

      <audio data-key="65" src="sounds/atumalaca.wav"></audio>
      <audio data-key="83" src="sounds/cavalo.mp3"></audio>
      <audio data-key="68" src="sounds/ele-gosta.mp3"></audio>
      <audio data-key="70" src="sounds/coringa.mp3"></audio>
      <audio data-key="71" src="sounds/porquesera.mp3"></audio>
      <audio data-key="72" src="sounds/fazol.mp3"></audio>
      <script>
        {
          window.addEventListener("keydown", function (e) {
          const audio = document.querySelector(
            `audio[data-key="${e.keyCode}"]`
          );
          const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
          console.log(audio);
          if (!audio) return;
          audio.currentTime = 0;
          audio.play();

          key.classList.add("playing");
          function removeTransition(e){
            if (e.propertyName !== 'transform') return;
            this.classList.remove('playing')
          }
          const keys = document.querySelectorAll('.key');
          keys.forEach(key => key.addEventListener('transitionend', removeTransition))
        })}
      </script>
      
    </>
  );
}
