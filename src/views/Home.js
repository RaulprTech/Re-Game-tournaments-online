import React from 'react';

const Titulo = (props) => {
    return(
        <div className="col text-center align-items-center">
            <h1 className="h1"><strong>Revolucion </strong><strong className="text-danger"> GAME</strong></h1>
            <div className="container mt-3 mb-2">
                <a type="button" href="#Torneos" className="btn btn-lg btn-danger text-white">Ver Torneos</a>
            </div>
        </div>
    )
}

function Home() {
    return (
            <div className="row bg-dark" id="home">
                <div className="card text-white">
                    <img src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=NWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2fFNQTw&docid=https%3A%2F%2Frevoluciongame.sharepoint.com%3A443%2Fsites%2FRevolucionGame%2F_api%2Fv2.0%2Fdrives%2Fb!PlsiUYtTx027EC9hTXhwrDDWYxlBUP5DsPBak-Ckq-eG9OkzQwkqRLYrx4hv9KQs%2Fitems%2F01QMDBDFOQCRT7FWUQYNE2EW4DWTOWARI7%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcmV2b2x1Y2lvbmdhbWUuc2hhcmVwb2ludC5jb21AZWUxZmJkNWEtMzY0OS00MmRkLWE5ZmEtZjg1ZjJkMWI1ZjJkIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTU5MTIwNTU1MSIsImV4cCI6IjE1OTEyMjcxNTEiLCJlbmRwb2ludHVybCI6IkhnbTRNYjlFd1JSVFhhUnp4YkVVUEhBY3BXZHU2SGJQdFRXN2ZHYThHS0U9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNDIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6IllXSmtOalU0T1dZdE5EQTJNeTB3TURBd0xUVm1ZVFl0TW1KbU1EYzVZV1E1TW1NNCIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEV5TWpWaU0yVXROVE00WWkwMFpHTTNMV0ppTVRBdE1tWTJNVFJrTnpnM01HRmoiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgV2ViIENsaWVudCIsImdpdmVuX25hbWUiOiJSYXVsIiwiZmFtaWx5X25hbWUiOiJwYWNoZWNvIHJvZHJpZ3VleiIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjVlM2NlNmMwLTJiMWYtNDI4NS04ZDRiLTc1ZWU3ODc4NzM0NiIsInRpZCI6ImVlMWZiZDVhLTM2NDktNDJkZC1hOWZhLWY4NWYyZDFiNWYyZCIsInVwbiI6InJhdWxfdnJtXzIxMzRfaG90bWFpbC5jb20jZXh0I0ByZXZvbHVjaW9uZ2FtZS5vbm1pY3Jvc29mdC5jb20iLCJwdWlkIjoiMTAwMzIwMDA2Mzg0Rjk5QyIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNjM4NGY5OWNAbGl2ZS5jb20iLCJzY3AiOiJteWZpbGVzLndyaXRlIGFsbHNpdGVzLmZ1bGxjb250cm9sIGFsbHNpdGVzLm1hbmFnZSBhbGxwcm9maWxlcy53cml0ZSIsInR0IjoiMiIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGx9.VUwrNkpWTkhlNkZ1Z3FJMU56UFhqLy9SbE8zaHJhdVlYQzE0WVRYU2crND0&encodeFailures=1&width=1835&height=767" className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <div className="col-sm">
                            <Titulo/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Home;