import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import OurTeamCard from './OurTeamCard';

const OurTeam = () => {
    const [teamMember, setTeamMember] = useState([]);

    useEffect(() => {
        fetch('/ourTeam.json')
            .then(res => res.json())
            .then(data => setTeamMember(data));
    }, []);

    console.log(teamMember)

    return (
        <section className="w-full flex flex-col justify-center items-center gap-6 my-[130px]">
            <div className='text-center w-1/2 flex flex-col justify-center items-center'>
                <p className="text-xl font-bold text-primary">Team</p>
                <h2 className="text-[45px] font-semibold text-darkBlack">Meet Our Team</h2>
                <p className="text-gray">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 relative">
                {
                    teamMember.map(member => <OurTeamCard
                        key={member._id}
                        member={member}
                    />)
                }

                <div className="absolute top-1/2 left-[-2%] text-2xl h-[60px] w-[60px] bg-lightGray rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <AiOutlineArrowLeft />
                </div>
                <div className="absolute top-1/2 right-[-2%] text-2xl h-[60px] w-[60px] bg-lightGray rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <AiOutlineArrowRight />
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
