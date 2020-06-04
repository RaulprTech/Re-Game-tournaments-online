import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from "react-router-dom";

import { useUser } from 'reactfire';

import Nav from './components/Nav';

import Footer from './components/Footer';
import Login from './components/Login'
import Registro from './components/Registro'
import Torneo from './components/Torneo'

import Home from './views/Home';
import Torneos from './views/Torneos';
import Anuncios from './views/Anuncios';
import Sponsors from './views/Sponsors';

const Main = (props) => {
    return(
        <div className="bg-dark">
            <div className="container-fluid">
                <Home />
                <div id="Duels" className="row">
                    <img src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=NWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2fFNQTw&docid=https%3A%2F%2Frevoluciongame.sharepoint.com%3A443%2Fsites%2FRevolucionGame%2F_api%2Fv2.0%2Fdrives%2Fb!PlsiUYtTx027EC9hTXhwrDDWYxlBUP5DsPBak-Ckq-eG9OkzQwkqRLYrx4hv9KQs%2Fitems%2F01QMDBDFLPPUNKJVU7BJEZOZZYMK7DP5QW%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcmV2b2x1Y2lvbmdhbWUuc2hhcmVwb2ludC5jb21AZWUxZmJkNWEtMzY0OS00MmRkLWE5ZmEtZjg1ZjJkMWI1ZjJkIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTU5MTIwNjMxNiIsImV4cCI6IjE1OTEyMjc5MTYiLCJlbmRwb2ludHVybCI6IkhnbTRNYjlFd1JSVFhhUnp4YkVVUEhBY3BXZHU2SGJQdFRXN2ZHYThHS0U9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNDIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik5qWmtOelU0T1dZdE9EQXhZUzB3TURBd0xUUTNOakl0TWpJMk1XRXdNRGxrTldJMSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEV5TWpWaU0yVXROVE00WWkwMFpHTTNMV0ppTVRBdE1tWTJNVFJrTnpnM01HRmoiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgV2ViIENsaWVudCIsImdpdmVuX25hbWUiOiJSYXVsIiwiZmFtaWx5X25hbWUiOiJwYWNoZWNvIHJvZHJpZ3VleiIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjVlM2NlNmMwLTJiMWYtNDI4NS04ZDRiLTc1ZWU3ODc4NzM0NiIsInRpZCI6ImVlMWZiZDVhLTM2NDktNDJkZC1hOWZhLWY4NWYyZDFiNWYyZCIsInVwbiI6InJhdWxfdnJtXzIxMzRfaG90bWFpbC5jb20jZXh0I0ByZXZvbHVjaW9uZ2FtZS5vbm1pY3Jvc29mdC5jb20iLCJwdWlkIjoiMTAwMzIwMDA2Mzg0Rjk5QyIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNjM4NGY5OWNAbGl2ZS5jb20iLCJzY3AiOiJteWZpbGVzLndyaXRlIGFsbHNpdGVzLmZ1bGxjb250cm9sIGFsbHNpdGVzLm1hbmFnZSBhbGxwcm9maWxlcy53cml0ZSIsInR0IjoiMiIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGx9.alRaUEhySGhobW1hYTUwWEVQR0VFTFZtU21JbHN2TjE1MVBxa1M1NFdpST0&encodeFailures=1&width=1835&height=767" className="card-img" alt="..."/>
                </div>
                <div id="Nosotros" className="row">
                    <img src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=NWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2fFNQTw&docid=https%3A%2F%2Frevoluciongame.sharepoint.com%3A443%2Fsites%2FRevolucionGame%2F_api%2Fv2.0%2Fdrives%2Fb!PlsiUYtTx027EC9hTXhwrDDWYxlBUP5DsPBak-Ckq-eG9OkzQwkqRLYrx4hv9KQs%2Fitems%2F01QMDBDFO4RRVB4FG7ERH2WYBCAW4TNETU%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcmV2b2x1Y2lvbmdhbWUuc2hhcmVwb2ludC5jb21AZWUxZmJkNWEtMzY0OS00MmRkLWE5ZmEtZjg1ZjJkMWI1ZjJkIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTU5MTIwNjA1OSIsImV4cCI6IjE1OTEyMjc2NTkiLCJlbmRwb2ludHVybCI6IkhnbTRNYjlFd1JSVFhhUnp4YkVVUEhBY3BXZHU2SGJQdFRXN2ZHYThHS0U9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNDIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik1qZGtOelU0T1dZdFpEQTJNaTB3TURBd0xUUTBZVFV0TjJVeE16Qm1OakZqT1RjMyIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEV5TWpWaU0yVXROVE00WWkwMFpHTTNMV0ppTVRBdE1tWTJNVFJrTnpnM01HRmoiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgV2ViIENsaWVudCIsImdpdmVuX25hbWUiOiJSYXVsIiwiZmFtaWx5X25hbWUiOiJwYWNoZWNvIHJvZHJpZ3VleiIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjVlM2NlNmMwLTJiMWYtNDI4NS04ZDRiLTc1ZWU3ODc4NzM0NiIsInRpZCI6ImVlMWZiZDVhLTM2NDktNDJkZC1hOWZhLWY4NWYyZDFiNWYyZCIsInVwbiI6InJhdWxfdnJtXzIxMzRfaG90bWFpbC5jb20jZXh0I0ByZXZvbHVjaW9uZ2FtZS5vbm1pY3Jvc29mdC5jb20iLCJwdWlkIjoiMTAwMzIwMDA2Mzg0Rjk5QyIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNjM4NGY5OWNAbGl2ZS5jb20iLCJzY3AiOiJteWZpbGVzLndyaXRlIGFsbHNpdGVzLmZ1bGxjb250cm9sIGFsbHNpdGVzLm1hbmFnZSBhbGxwcm9maWxlcy53cml0ZSIsInR0IjoiMiIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGx9.T3hGZ0VPL1VpUDJQMVJHRkRvSkpPOHRNRTY3OGh0bGFCdTNXVGFvaEdUaz0&encodeFailures=1&width=1835&height=767" className="card-img" alt="..."/>
                </div>
                <div id="Torneos"className="row pb-4 bg-danger">
                    <Torneos/>
                </div>
            </div>
            <Sponsors/>
            <div className="container-fluid align-items-center justify-content-center text-white">
                <Anuncios/>
            </div>
            <Footer/>
        </div>
    )
}

function App() {
  const user = useUser();
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Entrar" component={Login} />
        <Route path="/Registro" component={Registro} />
        <Route path="/Torneo" component={Torneo} />
      </Switch>
    </div>
  );
}

export default App;