package glico.pocky.domain.member.dao;

import glico.pocky.domain.member.dto.SignupRequest;
import lombok.extern.log4j.Log4j2;
import glico.pocky.domain.member.domain.Member;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Log4j2 (topic = "member")
@Repository
public class MemberDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    public List<Member> getMemberList() {

        List<Member> memberList = sqlSessionTemplate.selectList( "member.getMemberList");

        return memberList;
    }


    public int signup(SignupRequest signupRequest) {

        int result = sqlSessionTemplate.insert( "member.signup", signupRequest);

       return result;
    }

    public Member memberLogin(Member memberRequest) {

        Member member = sqlSessionTemplate.selectOne("member.memberLogin", memberRequest);

        return member;
    }
}
