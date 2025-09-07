import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "While You Sleep",
      cover:
        "https://cms.chillhop.com/media/3301/64e78908a87decbea61f61278634bc983b35f0b6.jpg",
      artist: "Late Era",
      audio: "https://stream.chillhop.com/mp3/9308",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lilac",
      cover:
        "https://cms.chillhop.com/media/3284/e53bceed140d4271d69c8017d3a629b2f7b44e98.jpg",
      artist: "G Mills",
      audio: "https://stream.chillhop.com/mp3/9143",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Simple Words",
      cover:
        "https://cms.chillhop.com/media/3348/5f0e7cc8edffe0f25e89a19da5f0fea260ad053d.jpg",
      artist: "yutaka hirasaka",
      audio: "https://stream.chillhop.com/mp3/9079",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kyiv",
      cover:
        "https://cms.chillhop.com/media/4799/9220a7cf859fabea67fff38d403d6240d84cca10.jpg",
      artist: "Beau Diako",
      audio: "https://stream.chillhop.com/mp3/8345",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hindsight",
      cover:
        "https://cms.chillhop.com/media/4799/9220a7cf859fabea67fff38d403d6240d84cca10.jpg",
      artist: "Luis Álvarez",
      audio: "https://stream.chillhop.com/mp3/9079",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "For Once",
      cover:
        "https://cms.chillhop.com/media/4799/9220a7cf859fabea67fff38d403d6240d84cca10.jpg",
      artist: "Alaskan Tapes",
      audio: "https://stream.chillhop.com/mp3/8322",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;