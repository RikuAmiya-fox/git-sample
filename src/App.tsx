import React from "react";

const Users = [
  { id: 1, name: "田中", age: 20 },
  { id: 2, name: "佐藤", age: 99 },
  { id: 3, name: "山田", age: 1 },
];

function App() {
  return (
    <>
      <h4>ユーザー一覧</h4>
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
    </>
  );
}

export default App;
