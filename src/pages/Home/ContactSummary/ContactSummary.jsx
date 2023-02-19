import React from 'react';
import timetable from '../../../assets/icons/timetable.png';
import call from '../../../assets/icons/call.png';
import location from '../../../assets/icons/location.png';

const ContactSummary = () => {
    // const data = [
    //     {
    //         _id: 1,
    //         title: 'We are open monday-friday',
    //         detail: '7:00 am - 9:00 pm'
    //     }
    // ];

    return (
        <section className="md:h-[250px] h-auto bg-darkBlack rounded-lg flex md:flex-row flex-col md:items-center items-start px-7 md:px-0 justify-center md:gap-14 gap-5 md:my-[130px] my-[60px] py-7">
            <div className="text-white flex items-center justify-center gap-6">
                <figure>
                    <img src={timetable} alt="timetable" />
                </figure>
                <div className="">
                    <h4 className="font-medium md:text-sm text-[12px] mb-[6px]">We are open monday-friday</h4>
                    <h4 className="md:text-[25px] text-lg">7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className="text-white flex items-center justify-center gap-6">
                <figure>
                    <img src={call} alt="timetable" />
                </figure>
                <div className="">
                    <h4 className="font-medium md:text-sm text-[12px] mb-[6px]">Have a question?</h4>
                    <h4 className="md:text-[25px] text-lg">+2546 251 2658</h4>
                </div>
            </div>
            <div className="text-white flex items-center justify-center gap-6">
                <figure>
                    <img src={location} alt="timetable" />
                </figure>
                <div className="">
                    <h4 className="font-medium md:text-sm text-[12px] mb-[6px]">Need a repair? our address</h4>
                    <h4 className="md:text-[25px] text-lg">Liza Street, New York</h4>
                </div>
            </div>
        </section>
    )
}

export default ContactSummary;
