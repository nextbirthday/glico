"use client";

import axios, { Method } from "axios";
import React, { useEffect, useState } from "react";

interface Member {
    id: number;
    username: string;
    password: string;
    email: string | null;
    // 다른 멤버 필드가 있으면 여기에 추가
}

const Page = () => {
  const [memberList, setMemberList] = useState<Member[]>([]);

  const getData = async () => {

    try {
      const res = await axios({
        method: "GET" as Method,
        url: process.env.NEXT_PUBLIC_SPRING_IP + "member/list",
      });
      setMemberList(res.data);

    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      page
      <ul>
        {memberList.map((member) => 
                    member ? ( 
                        <li key={member.id}>
                            {member.id}, {member.username}, {member.password}, {member.email || 'N/A'}
                        </li>
                    ) : null
                )}
      </ul>
    </div>
  );
};

export default Page;
