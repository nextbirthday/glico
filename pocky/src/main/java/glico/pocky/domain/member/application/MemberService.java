package glico.pocky.domain.member.application;

import glico.pocky.domain.member.dao.MemberDao;
import glico.pocky.domain.member.domain.Member;
import glico.pocky.domain.member.dto.SignupRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Log4j2
@Service
public class MemberService {

    AES256 aes256 = new AES256();

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private MemberDao memberDao;


    public List<Member> getMemberList() {

        List<Member> memberList =  memberDao.getMemberList();

        try {

            List<Member> decryptedList;

            for(int i=0; i<memberList.size(); i++){
                HashMap<String, String> decryptedMap = new HashMap<>();

                if(memberList.get(i).getName() != null) {
                    String decryptedName = memberList.get(i).getName();
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
            signupRequest.setName(aes256.encrypt(signupRequest.getName()));
        }

        if(signupRequest.getBirth() != null && signupRequest.getBirth() != ""){
            signupRequest.setBirth(aes256.encrypt(signupRequest.getBirth()));
        }

        if(signupRequest.getEmail() != null && signupRequest.getEmail() != ""){
            signupRequest.setEmail(aes256.encrypt(signupRequest.getEmail()));
        }

        if(signupRequest.getMobile() != null && signupRequest.getMobile() != ""){
            signupRequest.setMobile(aes256.encrypt(signupRequest.getMobile()));
        }

        log.info("signupRequest : {}", signupRequest);

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
