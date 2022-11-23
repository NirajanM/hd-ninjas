import './App.css';

function App() {
  const linkDetails = [
    {
      url: "https://9goal.tv/",
      heading: "9️⃣goal - best among all",
      desc: "best quality and easy to use(select hd server)"
    },
    {
      url: "https://en.60mins.online/",
      heading: "6️⃣0️⃣minsonline",
      desc: "good arabic site"
    },
    {
      url: "https://foot4live.com/",
      heading: "foot4️⃣live",
      desc: "search engine that isn't the host but search different live links"
    },
    {
      url: "https://qatarstreams.me/schedule/2022-football-world-cup",
      heading: "qat🅰rstreams",
      desc: "many live links based on games available"
    },
    {
      url: "https://buffstreams.sx/watch-soccer",
      heading: "buffstre🅰m",
      desc: "another catalogue of live hosts"
    },
    {
      url: "https://totalsportek.pro/",
      heading: "tot🅰lsp🅾rtek",
      desc: "everyone probably know this site and might lag"
    },
    {
      url: "https://www.as-goal.com/mm/",
      heading: "asgo🅰l",
      desc: "similar site"
    },
    {
      url: "https://www.score808.com/",
      heading: "score8️⃣0️⃣8️⃣",
      desc: "another good site"
    },
    {
      url: "https://worldcup.soccerstreams.net/",
      heading: "weakstream",
      desc: "another good site"
    },
    {
      url: "https://kooora.alkoora.live/",
      heading: "korora",
      desc: "another good site"
    },
    {
      url: "https://sport.ceskatelevize.cz/rubrika/fotbal/ms/mistrovstvi-sveta-2022#live",
      heading: "ceskatelevize",
      desc: "probably russian site"
    },
    {
      url: "http://1stream.link/",
      heading: "1stream",
      desc: "---"
    },
    {
      url: "https://sports.genzaitv.com/2022/11/fifa-world-cup-2022-live-broadcasting.html.html",
      heading: "hnc",
      desc: "---"
    }
  ]
  return (
    <><header>biswa kap dui hajar bais</header>
      <div className="App">
        <section id="main-section">
          <div>
            <h2>Best Sites: <span className='descr'>in descending order - visit directly in one click</span></h2>
            <ul>
              {
                linkDetails.map((detail) => {
                  return (
                    <a href={detail.url}><li><div className="title">{detail.heading}</div> - {detail.desc}</li></a>
                  );
                })
              }
            </ul>
            <p><h2>best alternative:</h2><ol>
              <li>Use VPN (location Australia).</li>
              <li>Download "SBS On Demand"</li>
              <li>Create account its free.</li>
              <li>All matches will be broadcast in hd for free.</li>
            </ol>
            </p>
          </div>
        </section>
      </div>
      <footer>
        {/* used emojℹ to  🅰v🅾ℹd  ©-strℹke */}
        Thank me later XD
      </footer>
    </>
  );
}

export default App;
