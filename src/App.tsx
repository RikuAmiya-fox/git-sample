import React from "react";

const Users = [
  { id: 1, name: "田中" },
  { id: 2, name: "佐藤" },
  { id: 3, name: "山田" },
];

function App() {
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
    </>
  );
}

export default App;
