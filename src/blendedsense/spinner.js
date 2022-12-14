import React, { Component } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
export default class ButtonLoader extends Component {
  state = {
    loading: false,
  };

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div style={{ marginTop: "60px" }}>
        <button className="button" onClick={this.fetchData} disabled={loading}>
          {loading && <i class="fa fa-refresh" aria-hidden="true"></i>}
          {loading && <span>Loading Data from Server</span>}
          {!loading && <span>Fetch Data from Server</span>}
        </button>
      </div>
    );
  }
}
