import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Users = [
  { id: 1, name: "田中" },
  { id: 2, name: "佐藤" },
  { id: 3, name: "山田" },
  { id: 4, name: "鈴木" },
  { id: 5, name: "高橋" },
  { id: 6, name: "伊藤" },
  { id: 7, name: "渡辺" },
  { id: 8, name: "中村" },
  { id: 9, name: "小林" },
  { id: 10, name: "加藤" },
];

function App() {
  const [catImage, setCatImage] = useState<string>("");
  const URL = "https://api.thecatapi.com/v1/images/search";

  const fetchCatImage = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCatImage(data[0].url))
      .catch((error) =>
        console.error("猫ちゃんの画像取得に失敗しました " + error)
      );
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <>
      <h1>ユーザー一覧</h1>
      <table border="1">
        {" "}
        {/* 簡単な枠線を追加 */}
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
          </tr>
        </thead>
        <tbody>
          {/* Users配列をmapで展開して、各ユーザーをテーブルの行(tr)として表示 */}
          {Users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Box textAlign="center" mt={5}>
        {catImage && (
          <img
            src={catImage}
            alt="猫ちゃん"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={fetchCatImage}
          sx={{ mt: 3 }}
        >
          別の猫ちゃんを見る
        </Button>
      </Box>
    </>
  );
}

export default App;
