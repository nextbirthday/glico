package glico.pocky.domain.member.application;

import glico.pocky.domain.member.dao.MemberDao;
import glico.pocky.domain.member.domain.Member;
import glico.pocky.domain.member.dto.SignupRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Vector;

@Log4j2
@Service
public class MemberService {

    AES256 aes256 = new AES256();
    AES aes = new AES();

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private MemberDao memberDao;

    public List<Member> getMemberList() {

        List<Member> memberList =  memberDao.getMemberList();

        try {

            for(int i=0; i<memberList.size(); i++){

                if(memberList.get(i).getName() != null && !"".equals(memberList.get(i).getName())) {
                    String decryptedName = memberList.get(i).getName();
                    memberList.get(i).setName(aes.decrypt("abcd1234mnop4321", decryptedName));
                }

                if(memberList.get(i).getBirth() != null && !"".equals(memberList.get(i).getBirth())) {
                    String decryptedBirth = memberList.get(i).getBirth();
                    memberList.get(i).setBirth(aes.decrypt("abcd1234mnop4321", decryptedBirth));
                }

                if(memberList.get(i).getEmail() != null && !"".equals(memberList.get(i).getEmail())) {
                    String decryptedEmail = memberList.get(i).getEmail();
                    memberList.get(i).setEmail(aes.decrypt("abcd1234mnop4321", decryptedEmail));
                }

                if(memberList.get(i).getMobile() != null && !"".equals(memberList.get(i).getMobile())) {
                    String decryptedMobile = memberList.get(i).getMobile();
                    memberList.get(i).setMobile(aes.decrypt("abcd1234mnop4321", decryptedMobile));
                }
            }

        }catch (Exception e) {
            log.error("e : {}", e);
        }

        return memberList;
    }

    public int  signup(SignupRequest signupRequest) throws Exception {

        if(signupRequest.getPassword() != null) {
            signupRequest.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        }

        if(signupRequest.getName() != null && signupRequest.getName() != ""){
            signupRequest.setName(aes.encrypt("abcd1234mnop4321", signupRequest.getName()));
        }

        if(signupRequest.getBirth() != null && signupRequest.getBirth() != ""){
            signupRequest.setBirth(aes.encrypt("abcd1234mnop4321", signupRequest.getBirth()));
        }

        if(signupRequest.getEmail() != null && signupRequest.getEmail() != ""){
            signupRequest.setEmail(aes.encrypt("abcd1234mnop4321", signupRequest.getEmail()));
        }

        if(signupRequest.getMobile() != null && signupRequest.getMobile() != ""){
            signupRequest.setMobile(aes.encrypt("abcd1234mnop4321", signupRequest.getMobile()));
        }

        int result =  memberDao.signup(signupRequest);

        return result;
    }

    public Member memberLogin(Member memberRequest) {

        Member member = memberDao.memberLogin(memberRequest);

        if(member != null && passwordEncoder.matches(memberRequest.getPassword(), member.getPassword())){
            return member;
        }else{
            return null;
        }

    }

}
