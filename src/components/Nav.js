import React from 'react';
import { useUser } from 'reactfire';
import { Link } from "react-router-dom";

const SignIn = (props) => {
    return(
            <li className="nav-item">
                <Link className="nav-link text-danger m-2" to="/Entrar"><strong>Entrar</strong></Link>
            </li>
    )
}

const SignUp = (props) => {
    return(
            <li className="nav-item">
                <Link className="nav-link text-danger m-2" to="/Registro"><strong>Regitrarme</strong></Link>
            </li>
    )
}

const SignOut = (props) => {
    return(
        <li className="nav-item">
            <Link className="nav-link text-danger m-2" to="/Salir"><strong>Salir</strong></Link>
        </li>
    )
}

const Nav = (props) => {
    const user = useUser();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
            <a className="navbar-brand text-danger" href="/">
                <div className="d-flex flex-row bd-highlight">
                    <img src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=NWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2fFNQTw&docid=https%3A%2F%2Frevoluciongame.sharepoint.com%3A443%2Fsites%2FRevolucionGame%2F_api%2Fv2.0%2Fdrives%2Fb!PlsiUYtTx027EC9hTXhwrDDWYxlBUP5DsPBak-Ckq-eG9OkzQwkqRLYrx4hv9KQs%2Fitems%2F01QMDBDFI7ITAINOA7VZFLKGOTTZ7E7YBP%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcmV2b2x1Y2lvbmdhbWUuc2hhcmVwb2ludC5jb21AZWUxZmJkNWEtMzY0OS00MmRkLWE5ZmEtZjg1ZjJkMWI1ZjJkIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTU5MTIwNTMzOSIsImV4cCI6IjE1OTEyMjY5MzkiLCJlbmRwb2ludHVybCI6IkhnbTRNYjlFd1JSVFhhUnp4YkVVUEhBY3BXZHU2SGJQdFRXN2ZHYThHS0U9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNDIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik56ZGtOalU0T1dZdE1EQTNNaTB3TURBd0xUUTNOakl0TWpsallqSmlPRFl3TjJObSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEV5TWpWaU0yVXROVE00WWkwMFpHTTNMV0ppTVRBdE1tWTJNVFJrTnpnM01HRmoiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgV2ViIENsaWVudCIsImdpdmVuX25hbWUiOiJSYXVsIiwiZmFtaWx5X25hbWUiOiJwYWNoZWNvIHJvZHJpZ3VleiIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjVlM2NlNmMwLTJiMWYtNDI4NS04ZDRiLTc1ZWU3ODc4NzM0NiIsInRpZCI6ImVlMWZiZDVhLTM2NDktNDJkZC1hOWZhLWY4NWYyZDFiNWYyZCIsInVwbiI6InJhdWxfdnJtXzIxMzRfaG90bWFpbC5jb20jZXh0I0ByZXZvbHVjaW9uZ2FtZS5vbm1pY3Jvc29mdC5jb20iLCJwdWlkIjoiMTAwMzIwMDA2Mzg0Rjk5QyIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNjM4NGY5OWNAbGl2ZS5jb20iLCJzY3AiOiJteWZpbGVzLndyaXRlIGFsbHNpdGVzLmZ1bGxjb250cm9sIGFsbHNpdGVzLm1hbmFnZSBhbGxwcm9maWxlcy53cml0ZSIsInR0IjoiMiIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGx9.VTYwdGpHUjA0K3RmbThGWWxweXpWVy9PME9Uc21hemFMMXc4bHpMVHBOST0&encodeFailures=1&width=147&height=191" width="40" height="40" className="d-inline-block" alt=""/>
                    <h4 className="bd-highlight mt-1 ml-2">Revolucion Game</h4>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse mr-3" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-2">
                    <li className="nav-item">
                        <a type="button" href="#Torneos" className="btn btn-outline-danger m-2"><strong>Torneos</strong></a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link text-danger m-2" href="#Nosotros"><strong>Nosotros</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-danger m-2" href="#Proximamente"><strong>Proximamente</strong></a>
                    </li>
                    {
                    user    ?   <SignOut/>
                            :   <SignIn/>
                    }
                    {
                        !user && <SignUp/> 
                    }
                </ul>
            </div>
        </nav>
    )
}
export default Nav;