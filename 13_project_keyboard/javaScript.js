
const insert = document.querySelector('#insert');
if (!insert) throw new Error('#insert element not found');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th> Key </th>
          <th> KeyCode </th>
          <th> code </th>
        </tr>
        <tr>
          <th> ${e.key === " " ? 'space' : e.key} </th>
          <th> ${e.keyCode} </th>
          <th> ${e.code} </th>
        </tr>
      </table>
    </div>
    `;
});
