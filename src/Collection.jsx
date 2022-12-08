import "./Collection.css";
import "./App.css";
import Stack from "@mui/material/Stack";
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
    <div class="v0_3">
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#FFF'
      }}><div className="v1_2" style={{zIndex: '9999'}}></div></Link>
      <div className="v1_11" style={{zIndex: '999'}}>
      <Stack
        direction="row"
        style={{
          marginLeft: "7vw",
        }}
        id="Stack"
      >
        <input className="v2_15" placeholder="Search..." />
        <span className="v2_16"><Link to="/profile" style={{
          textDecoration: 'none',
          color: '#FFF'
        }}>Profile</Link></span>
        <span className="v7_2"><Link to="/" style={{
          textDecoration: 'none',
          color: '#FFF'
        }}>Explore</Link></span>
        <button className="v1_10">Connect</button>
      </Stack>
    </div>
    <div class="v27_11"></div>
    <div class="v27_12"></div>
    <div class="v28_54"></div>
    <div class="v27_13"></div>
    <div class="v27_14"></div>
    <div class="v31_65"></div>
    <div class="v28_52"></div>
    <button class="v27_26">$100</button>
    <span class="v27_27"></span>
    <button class="v28_56">$104,934</button>
    <span class="v28_57"></span>
    <div class="v27_28"></div>
    <span class="v27_29">Collection Offer</span>
    <div class="v30_63"></div>
    <span class="v30_64">Sweep Floor</span><span class="v27_35">Bored Ape Yacht Club</span><span class="v28_55">Floor:</span><span class="v28_58">Total traded:</span>
    <button class="v30_60">$102.23</button>
    <span class="v30_61"></span><span class="v30_62">Highest offer:</span><span class="v27_38">On Sale</span><div class="v27_46"><button className="textPadding">#4787</button><button className="buyBtn">Buy - $100</button></div>
    <div class="v31_66"></div>
    <div class="v31_67"></div>
    <div class="v31_68"><button className="textPadding">#222</button><button className="buyBtn">Buy - $1.9M</button></div>
    <div class="v31_69"></div>
    <div class="v31_70"></div>
    <div class="v31_71"><button className="textPadding">#333</button><button className="buyBtn">Buy - $1,855</button></div><span className="v26_6">&copy; 2022 RavePlace Market</span>
      <span className="v26_7"><a href="https://twitter.com">Twitter</a> | <a href="mailto:raveplace@gmail.com">Email</a> | <a href="https://discord.com">Discord</a></span>
  </div>
  );
}
