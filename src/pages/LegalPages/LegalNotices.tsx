import React from 'react'
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../../components';

type Props = {}

const LegalNotices = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="notFound container">
        <div className="secContent grid">
          <div className="descriptionContainer">
            <div className="titleContainer">
              <img
                src="/assets/img/comingSoonText.png"
                alt="not-found"
              />
            </div>

            <div className="btnContainer">
              <Link to="/" type="button" className="btn">
                Take Me Back
              </Link>
            </div>
          </div>
          <div className="imgContainer">
            <img src="/assets/img/coming-soon.png" alt="not-found" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LegalNotices