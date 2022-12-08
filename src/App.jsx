import "./App.css";
import Stack from "@mui/material/Stack";
import { Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";



const search = [
  { key: 'bayc', value: 'bayc', text: 'Bored Ape Yacht Club' },
]

const results = (input) => {
  let res = [];
  for (let i=0; i < search.length; i++) {
    if (search[i].text.startsWith(input) || search[i].value.startsWith(input)) {
      res.push(search[i]);
    }
  }
  return res;
}

export default function App() {
  return (
    <div className="v0_3">
      <div className="v13_3"></div>
      <div className="v25_13"></div>
      <div className="v25_16"></div>
      <div className="v1_11">
        <Stack
          direction="row"
          style={{
            marginLeft: "7vw",
          }}
          id="Stack"
        >
          <input className="v2_15" placeholder="Search..." />
          <span className="v2_16"><Link to="/collection" style={{
            textDecoration: 'none',
            color: '#FFF'
          }}>Collections</Link></span>
          <span className="v7_2"><Link to="/profile" style={{
            textDecoration: 'none',
            color: '#FFF'
          }}>Profile</Link></span>
          <button className="v1_10">Connect</button>
        </Stack>
      </div>
      <Link to="/" style={{
            textDecoration: 'none',
            color: '#FFF'
          }}><div className="v1_2"></div></Link>
      <div className="v15_2"></div>
      <Stack direction="column">
        <Stack direction="row" style={{
          marginLeft: '52.5vw',
        }} id="buttons">
          <button className="v19_7"><Link to="/profile" style={{
            textDecoration: 'none',
            color: '#FFF'
          }}>Profile</Link></button>
          <button className="v19_7">Explore</button>
        </Stack>
        <button className="v19_9" onClick={() => {
          window.scrollBy(0, 1000)
        }}>Trending Collections</button>
      </Stack>
      <div className="animated-contain">
        <div className="v13_5" style={{ height: "113px", overflow: "hidden" }}>
          <div class="animated-text">
            <span
              style={{
                marginLeft: "35px",
              }}
            >
              {" "}
              SELL
            </span>
            <span>STAKE</span>
            <span
              style={{
                marginLeft: "47px",
              }}
            >
              {" "}
              BUY
            </span>
          </div>
        </div>
      </div>
      <div className="v13_5 v"> the hottest NFTs</div>
      <span className="v15_3">With minimal fees</span>
      <div className="v19_4">
        <span className="v19_8">Explore</span>
        <div className="v25_11"></div>
        <span className="v25_12">Trending Collections</span>

      </div>
      <span className="v25_14">Trade on RavePlace</span>
      <div className="v16_3"></div>
      <span className="v19_5"><Link to="/collection" style={{
            textDecoration: 'none',
            color: '#FFF'
          }}>Bored Ape Yacht Club #2533</Link></span>
      <span className="v25_15">Trending Collections</span>
      <div className="v25_18"></div>
      <div className="v25_19"></div>
      <div className="v25_20"></div>
      <div className="v25_21"></div>
      <div className="v25_22"></div>
      <div className="v25_23"></div>
      <div className="v25_24"></div>
      <span className="v26_2"><Link to="/collection" style={{
            textDecoration: 'none',
            color: '#FFF'
          }}>Bored Ape Yacht Club<span style={{
        float: 'right'
      }}>$100 floor</span></Link></span>
      <span className="v26_5">Collection #4 <span style={{
        float: 'right'
      }}>$1.3M floor</span></span>
      <span className="v26_6">&copy; 2022 RavePlace Market</span>
      <span className="v26_7"><a href="https://twitter.com">Twitter</a> | <a href="mailto:raveplace@gmail.com">Email</a> | <a href="https://discord.com">Discord</a></span>
      <span className="v26_3">Collection #2 <span style={{
        float: 'right'
      }}>$1.3k floor</span></span>
      <span className="v26_4">Collection #3 <span style={{
        float: 'right'
      }}>$13k floor</span></span>
    </div>
  );
}
