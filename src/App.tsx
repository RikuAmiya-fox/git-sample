import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Users = [
  { id: 1, name: "田中", age: 20 },
  { id: 2, name: "佐藤", age: 99 },
  { id: 3, name: "山田", age: 1 },
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
      <h1>GitHubDesktopテスト用</h1>
      <h1>ユーザー一覧</h1>
      <table border="1">
        {" "}
        {/* 簡単な枠線を追加 */}
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>年齢</th>
          </tr>
        </thead>
        <tbody>
          {/* Users配列をmapで展開して、各ユーザーをテーブルの行(tr)として表示 */}
          {Users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
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
