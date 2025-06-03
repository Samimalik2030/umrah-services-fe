export default function Practice() {
  


  return (
    <>
      <input
        id="input one"
        type="text"
        placeholder="Player one"
        style={{
          margin: 12,
        }}
        onChange={(event)=>console.log(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Player Two"
        style={{
          margin: 12,
        }}
      />
      <br />
      <button
        style={{
          marginLeft: 12,
        }}
      >
        Click Me!
      </button>
    </>
  );
}
