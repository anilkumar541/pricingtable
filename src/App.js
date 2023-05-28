import logo from './logo.svg';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <div>
        <h1>Pricing</h1>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <td scope="col"></td>
              <td scope="col">7 Days</td>
              <td scope="col">15 Days</td>
              <td scope="col">30 Days</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Per Day Price</th>
              <td><b>7000</b></td>
              <td>15000</td>
              <td>30000</td>
            </tr>
            <tr>
              <th scope="row">Total Savings</th>
              <td><b>700</b></td>
              <td>2250</td>
              <td>6000</td>
            </tr>
            <tr>
              <th scope="row">Total Amount</th>
              <td><b>6300</b></td>
              <td>12750</td>
              <td>24000</td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button class="btn btn-outline-primary">7 Days</button>&nbsp;&nbsp;
          <button class="btn btn-outline-primary">15 Days</button>&nbsp;&nbsp;
          <button class="btn btn-outline-primary">30 Days</button>&nbsp;&nbsp;
        </div>
        <br/>
        <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Pay with UPI</button>
  <p>or</p>
  <button class="btn btn-outline-primary" type="button">Pay with Other option</button>
  * Terms and Condition applied
</div>
      </div>

    </div>

  );
}

export default App;
