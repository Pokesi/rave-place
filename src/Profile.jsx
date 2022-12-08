import "./Profile.css";
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
        <span className="v2_16"><Link to="/collection" style={{
          textDecoration: 'none',
          color: '#FFF'
        }}>Collections</Link></span>
        <span className="v7_2"><Link to="/" style={{
          textDecoration: 'none',
          color: '#FFF'
        }}>Explore</Link></span>
        <button className="v1_10">Connect</button>
      </Stack>
    </div>
    <div class="v27_11"></div>
    <div class="v27_12" style={{
      height: '570px'
    }}></div>
    <div class="v28_54" style={{
      backgroundImage: 'url("https://cloudflare-ipfs.com/ipfs/Qmc89Cp8UEdywPBSWmTc1RFMbJLgTmBwCARbRXCPnhxVpu")',
      backgroundPosition: '-200px -200px',
    }}></div>
    <div class="v27_13_"></div>
    <div class="v27_14_"></div>
    <div class="v31_65_"></div>
    <div class="v28_52" style={{
      backgroundImage: 'url("https://artion-api-b.fantom.network/images/avatar/0x3e522051A9B1958Aa1e828AC24Afba4a551DF37d/QmZoENoh2axXEBejnjyja4ASheU69H3Z6YAc9FUYMZ4s66")',
      width: '250px',
      height: '250px',
      backgroundPosition: '-23px -23px',
    }}></div>
    <span class="v27_27"></span>
    <span class="v28_57"></span>
<span class="v27_35">randomz.eth | 0x3e52...F37d</span><span class="v27_38_">NFTs Held</span><div class="v27_46_"><button className="textPadding">#4787</button><button className="buyBtn">Buy - $100</button></div>
    <div class="v31_66_"></div>
    <div class="v31_67_"></div>
    <div class="v31_68_"><button className="textPadding">#222</button><button className="buyBtn">Buy - $1.9M</button></div>
    <div class="v31_69_"></div>
    <div class="v31_70_"></div>
    <div class="v31_71_"><button className="textPadding">#333</button><button className="buyBtn">Buy - $1,855</button></div><span className="v26_6">&copy; 2022 RavePlace Market</span>
      <span className="v26_7"><a href="https://twitter.com">Twitter</a> | <a href="mailto:raveplace@gmail.com">Email</a> | <a href="https://discord.com">Discord</a></span>
  </div>
  );
}
