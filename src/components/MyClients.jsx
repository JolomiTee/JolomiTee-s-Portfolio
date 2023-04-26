import React from 'react'

const MyClients = () => {
  return (
    <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="client-list has-scrollbar">

            <li className="client-items">
                <a href="https://www.udacity.com/" target="_blank">
                    <img src="./assets/images/images (1) (11).png" alt="client-logo" width="150" />
                </a>
            </li>
            <li className="client-items">
                <a href="https://github.com/JolomiTee/JolomiTee/blob/main/Access%20Denied.md" target="_blank">
                    <img src="./assets/images/l2.png" alt="client-logo" width="150" />
                </a>
            </li>
            <li className="client-items">
                <a href="https://training.zuri.team/" target="_blank">
                    <img src="./assets/images/images (12).jpeg" alt="client-logo" width="150" />
                </a>
            </li>
            <li className="client-items">
                <a href="https://lms.terrahq.co/" target="_blank">
                    <img src="./assets/images/images (1) (12).png" alt="client-logo" width="250" />
                </a>
            </li>

        </ul>
    </section>
  )
}

export default MyClients