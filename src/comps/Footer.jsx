import React from 'react';
import './Cont.css';


function Footer() {

    return (

    <div>
        < div className="container" >
            <div className="foooter">
                <div className="container">

                    <center>

                        <table>

                            <tr>
                                <th className="Bg3">POPULAR CATEGORIES</th>
                                <th className="Bg">TRENDING SEARCHES</th>
                                <th className="Bg" >ABOUT US </th>
                                <th className="Bg">OLX</th>
                                <th className="Bg">Find us on</th>
                            </tr>


                            <tr className="topp" >

                                <td className="bg3">cars</td>
                                <td className="bg2">Bikes</td>
                                <td className="bg2">Land</td>
                                <td className="bg2">  Mobile</td>
                                <td className="bg2"><a href=""> Twitter </a></td>

                            </tr>
                            <tr>
                                <td className="bg3">Jobs</td>
                                <td className="bg2">Business</td>
                                <td className="bg2">Machine</td>
                                <td className="bg2">Grocery</td>
                                <td className="bg2"> <a href="">Facebook </a> </td>
                            </tr>


                        </table>

                    </center>

                </div>
            </div>
            </div >
            <div className="end">

                <div className="container-laka">


                    <p className='enddd'> <span> <b>Other Countries </b></span> <a href=""> India -Africa-Iran </a>  © 2006-2020 OLX </p>

                </div>
            </div>
      






        </div>
    )
};

export default Footer;