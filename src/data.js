import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Sand Castles",
      artist: "Philanthrope, G Mills",
      cover: "https://i.scdn.co/image/ab67616d0000b273d9906598922442fe54e19b4d",

      audio: "https://mp3.chillhop.com/serve.php/?mp3=12154",
      id: uuidv4(),
      active: true,
      color: ["#644B2D", "#A0BC65"],
    },
    {
      name: "Cascade",
      artist: "Knowmadic",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",

      audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
      id: uuidv4(),
      active: false,
      color: ["#C07A1A", "#123765"],
    },
    {
      name: "Lagoons",
      artist: "Streehlow, Chris Mazuera",
      cover: "https://i.scdn.co/image/ab67616d0000b273c266150b4cdccf2ced31d166",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6130",
      id: uuidv4(),
      active: false,
      color: ["#5F3347", "#BBB2C2"],
    },
    {
      name: "Collages",
      artist: "Sleepy Fish",
      cover: "https://i.scdn.co/image/ab67616d0000b273400e59a11aabdf711c6b78d6",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=3523",
      id: uuidv4(),
      active: false,
      color: ["#231F43", "#56A7B4"],
    },
    {
      name: "Sunrise Hike",
      artist: "Ruck P",
      cover: "https://i.scdn.co/image/ab67616d0000b273ccdcf06294e4503bd0530297",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12133",
      id: uuidv4(),
      active: false,
      color: ["#923042", "#FEB38B"],
    },
    {
      name: "Traveling",
      artist: "Anbuu",
      cover: "https://i.scdn.co/image/ab67616d0000b273d9906598922442fe54e19b4d",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12137",
      id: uuidv4(),
      active: false,
      color: ["#50AC9E", "#FCEDC8"],
    },
    {
      name: "La Plage",
      artist: "C Y G N",
      cover: "https://i.scdn.co/image/ab67616d0000b2731d20e6df75656cdd956dc231",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2517",
      id: uuidv4(),
      active: false,
      color: ["#CE8361", "#6F6F6B"],
    },
  ];
}

export default chillHop;
