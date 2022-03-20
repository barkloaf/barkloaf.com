import "./App.scss"

import Project from "./components/Project.jsx"
import Tech from "./components/Tech"
import FooterLink from "./components/FooterLink"

import Typewriter from "typewriter-effect"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typewriter
          options={{
            cursor: "_"
          }}
          
          onInit={(typewriter) => {
            typewriter.typeString("barkloaf​.com").start()
          }}
        />
      </header>
      <div className="App-divider" />
      <body className="App-body">
        <Project
          img={require("./images/holidaybot.png")}
          title="HolidayBot"
          href="https://github.com/barkloaf/HolidayBot"
          text="a discord bot created with DiscordGo that spits out real holidays that you may have never heard of before."
        />

        <Project
          img={require("./images/metagrab.svg").default}
          title="MetaGrab"
          href="https://metagrab.barkloaf.com/"
          text="a webapp that grabs Spotify's metadata for any track you'd like."
        />

        <Project
          img={require("./images/us-reformed-international.png")}
          height="75"
          title="United States (Reformed International)"
          href="https://github.com/barkloaf/US-Reformed-International"
          text="a sensible version of the US-International keyboard layout with AltGr dead keys for Windows, Mac, and Linux."
        />

        <a className="item project" href="https://github.com/barkloaf/barkloaf.com">
          <div className="project-img barkloaf" />
          <p>
            <span className="project-title">
              <b><u>barkloaf.com</u></b>
            </span>
            <br />
            <span>
              the very website you are viewing right now.
            </span>
          </p>
        </a>

        <p className="item">
          <span><i>and maybe more to come...</i></span>
        </p>

        <hr />

        <div className="item tech-root">
          <span>some technologies that I've used:</span>
          <div className="techs">
            <Tech
              name="Arch Linux"
              img={require("./images/archlinux.svg").default}
              href="https://archlinux.org/"
            />
            <Tech
              name="Bash"
              img={require("./images/bash.svg").default}
              href="https://www.gnu.org/software/bash/"
            />
            <Tech
              name="CSS"
              img={require("./images/css3.svg").default}
              href="https://www.w3.org/TR/CSS/#css"
            />
            <Tech
              name="Docker"
              img={require("./images/docker.svg").default}
              href="https://www.docker.com/"
            />
            <Tech
              name="git"
              img={require("./images/git.svg").default}
              href="https://git-scm.com/"
            />
            <Tech
              name="Go Programming Language"
              img={require("./images/go.svg").default}
              href="https://go.dev/"
            />
            <Tech
              name="Grafana"
              img={require("./images/grafana.svg").default}
              href="https://grafana.com/"
            />
            <Tech
              name="GTK"
              img={require("./images/gtk.svg").default}
              href="https://www.gtk.org/"
            />
            <Tech
              name="HTML5"
              img={require("./images/html5.svg").default}
              href="https://html.spec.whatwg.org/"
            />
            <Tech
              name="Java"
              img={require("./images/java.svg").default}
              href="https://www.oracle.com/java/"
            />
            <Tech
              name="Lua"
              img={require("./images/lua.svg").default}
              href="https://www.lua.org/"
            />
            <Tech
              name="Microsoft SQL Server"
              img={require("./images/microsoft-sql-server.svg").default}
              href="https://www.microsoft.com/sql-server/"
            />
            <Tech
              name="NGINX"
              img={require("./images/nginx.svg").default}
              href="https://nginx.org/"
            />
            <Tech
              name="Node.js"
              img={require("./images/nodejs.svg").default}
              href="https://nodejs.org/"
            />
            <Tech
              name="Oracle Cloud"
              img={require("./images/oracle.svg").default}
              href="https://cloud.oracle.com/"
            />
            <Tech
              name="Packet Tracer"
              img={require("./images/packet-tracer.png")}
              href="https://www.netacad.com/courses/packet-tracer/"
            />
            <Tech
              name="Pi-hole"
              img={require("./images/pi-hole.svg").default}
              href="https://pi-hole.net/"
            />
            <Tech
              name="PostgreSQL"
              img={require("./images/postgresql.svg").default}
              href="https://www.postgresql.org/"
            />
            <Tech
              name="QEMU"
              img={require("./images/qemu.svg").default}
              href="https://www.qemu.org/"
            />
            <Tech
              name="React"
              img={require("./images/react.svg").default}
              href="https://reactjs.org/"
            />
            <Tech
              name="RethinkDB"
              img={require("./images/rethinkdb.webp")}
              href="https://rethinkdb.com/"
            />
            <Tech
              name="Rocky Linux"
              img={require("./images/rockylinux.svg").default}
              href="https://rockylinux.org/"
            />
            <Tech
              name="SELinux"
              img={require("./images/selinux.svg").default}
              href="https://github.com/SELinuxProject/"
            />
            <Tech
              name="Spotify Web API"
              img={require("./images/spotify.svg").default}
              href="https://developer.spotify.com/documentation/web-api/"
            />
            <Tech
              name="SSH"
              img={require("./images/ssh.svg").default}
              href="https://www.ssh.com/"
            />
          </div>
        </div>

        <hr />

        <div className="item about">
          <span className="about-title">
            about me ✨
          </span>
          <ul>
            <li className="about-top">(lifelong) IT student</li>
            <li className="about-mid">frequent Linux junkie</li>
            <li className="about-mid">powered by <a className="App-link" href="https://open.spotify.com/playlist/2GdpwSmS5Zn5m8Ht73X8fa">drum n' bass</a></li>
            <li className="about-mid">interested in international studies & linguistics</li>
            <li className="about-mid">occasional video game player</li>
            <li className="about-bottom">fluffy animal enjoyer</li>
          </ul>
        </div>
      </body>
      <div className="App-divider" />
      <footer className="App-footer">
        <FooterLink
          name="GitHub"
          img={require("./images/github.svg").default}
          href="https://github.com/barkloaf"
        />
      </footer>
    </div>
  );
}

export default App;
