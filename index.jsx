import React from "react";
import { Playlist } from "./Playlist";
import { PlaylistWrapper } from "./PlaylistWrapper";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap">
          <p className="text-wrapper">Designed and Coded by Shania Cabrera. 2024 Version.</p>
        </div>
        <div className="overlap-group">
          <div className="banner">
            <img className="silk" alt="Silk" src="silk.png" />
          </div>
          <div className="text-wrapper-2">S</div>
          <div className="work">work</div>
          <div className="about">about</div>
          <div className="b-side">b-side</div>
          <p className="i-m-shania-cabrera-a">
            <span className="span">
              I&#39;m Shania Cabrera, a UX/UI designer from Cornell University.
              <br />
            </span>
            <span className="text-wrapper-3">
              <br />
            </span>
            <span className="text-wrapper-4">
              Whether it&#39;s the enchanting world of music production, game design, or content distribution, I am
              driven by the desire to enhance the way artists engage with their tools.
            </span>
          </p>
          <div className="text-wrapper-5">Selected Projects</div>
          <div className="frame-2">
            <div className="text-wrapper-6">resume</div>
          </div>
        </div>
        <div className="card">
          <div className="overlap-2">
            <div className="pond">
              <div className="overlap-group-2">
                <PlaylistWrapper
                  className="playlist-4"
                  playlistHasFrame={false}
                  playlistSizeMediumStateClassName="playlist-5"
                />
                <div className="pond-2">
                  <div className="text-wrapper-7">Pond</div>
                  <p className="desc">
                    A community-driven platform that alleviates impostor syndrome by fostering support.
                  </p>
                </div>
                <div className="sub">
                  <Playlist
                    className="playlist-6"
                    hasFrameWrapper={false}
                    size="medium"
                    state="default"
                    visible={false}
                  />
                </div>
                <div className="playlist-instance-wrapper">
                  <Playlist
                    className="playlist-7"
                    hasFrameWrapper={false}
                    size="medium"
                    state="default"
                    visible={false}
                  />
                </div>
                <div className="sub-wrapper">
                  <div className="sub-2">
                    <Playlist
                      className="playlist-8"
                      hasFrameWrapper={false}
                      size="medium"
                      state="default"
                      visible={false}
                    />
                  </div>
                </div>
                <div className="name">UX Design</div>
                <div className="name-2">Usability Testing</div>
                <div className="name-3">Mobile</div>
              </div>
            </div>
            <img className="phone-duck" alt="Phone duck" src="phone-duck-1.png" />
          </div>
        </div>
        <div className="overlap-3">
          <div className="pond-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <PlaylistWrapper
                  className="playlist-4"
                  playlistHasFrame={false}
                  playlistSizeMediumStateClassName="playlist-5"
                />
                <div className="pond-2">
                  <div className="text-wrapper-7">Groove that Goob</div>
                  <p className="desc">
                    A rhythm &amp; stealth game where players guide an alien through a penthouse party.
                  </p>
                </div>
                <div className="sub">
                  <Playlist
                    className="playlist-6"
                    hasFrameWrapper={false}
                    size="medium"
                    state="default"
                    visible={false}
                  />
                </div>
                <div className="sub-3">
                  <Playlist
                    className="playlist-9"
                    hasFrameWrapper={false}
                    size="medium"
                    state="default"
                    visible={false}
                  />
                </div>
                <div className="sub-4">
                  <Playlist
                    className="playlist-10"
                    hasFrameWrapper={false}
                    size="medium"
                    state="default"
                    visible={false}
                  />
                </div>
                <div className="sub-wrapper">
                  <div className="sub-2">
                    <Playlist
                      className="playlist-8"
                      hasFrameWrapper={false}
                      size="medium"
                      state="default"
                      visible={false}
                    />
                  </div>
                </div>
                <div className="name-4">Music</div>
                <div className="name">UI Design</div>
                <div className="name-5">Animation</div>
                <div className="name-3">Game</div>
              </div>
            </div>
          </div>
          <img className="goob-poster" alt="Goob poster" src="goob-poster-1.png" />
        </div>
        <div className="overlap-4">
          <div className="fashion">Fashion</div>
          <Playlist className="playlist-11" hasFrameWrapper={false} size="medium" state="default" visible={false} />
          <div className="name-6">Product Design</div>
          <div className="div-wrapper">
            <div className="pond-3">
              <div className="overlap-group-3">
                <PlaylistWrapper
                  className="playlist-12"
                  playlistHasFrame={false}
                  playlistSizeMediumStateClassName="playlist-5"
                />
                <div className="card-2">
                  <div className="text-wrapper-7">Askal</div>
                  <p className="p">Sustainable men’s suits, with a unique blend of 70s and Caribbean flair.</p>
                </div>
              </div>
            </div>
          </div>
          <Playlist className="playlist-13" hasFrameWrapper={false} size="medium" state="default" visible={false} />
        </div>
        <div className="overlap-5">
          <div className="fashion-2">UI Design</div>
          <div className="div-wrapper">
            <div className="pond-3">
              <div className="overlap-group-3">
                <PlaylistWrapper
                  className="playlist-12"
                  playlistHasFrame={false}
                  playlistSizeMediumStateClassName="playlist-5"
                />
                <div className="card-2">
                  <div className="text-wrapper-7">BigRedHacks</div>
                  <p className="p">Creating the landing page for Cornell University’s Hackathon organization.</p>
                </div>
              </div>
            </div>
          </div>
          <Playlist className="playlist-14" hasFrameWrapper={false} size="medium" state="default" visible={false} />
        </div>
        <img className="line" alt="Line" src="line-1.svg" />
      </div>
    </div>
  );
};
