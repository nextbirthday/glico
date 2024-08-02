package glico.pocky.domain.member.application;

import glico.pocky.domain.channel.dao.ChannelDao;
import glico.pocky.domain.member.dao.MemberDao;
import glico.pocky.domain.member.domain.Member;
import glico.pocky.domain.member.dto.SignupRequest;
import glico.pocky.global.config.AesKeyConfig;
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

    private final AES aes;
    private final AesKeyConfig aesKeyConfig;
    private final PasswordEncoder passwordEncoder;
    private final MemberDao memberDao;

    @Autowired
    public MemberService(AES aes, AesKeyConfig aesKeyConfig,  PasswordEncoder passwordEncoder, MemberDao memberDao ) {
        this.aes = aes;
        this.aesKeyConfig = aesKeyConfig;
        this.passwordEncoder = passwordEncoder;
        this.memberDao = memberDao;
    }

    public List<Member> getMemberList() {

        List<Member> memberList =  memberDao.getMemberList();

        try {
            
            String aeskey = aesKeyConfig.getAesKey();
            
            for(int i=0; i<memberList.size(); i++){

                if(memberList.get(i).getName() != null && !"".equals(memberList.get(i).getName())) {
                    String decryptedName = memberList.get(i).getName();
                    memberList.get(i).setName(aes.decrypt(aeskey, decryptedName));
                }

                if(memberList.get(i).getBirth() != null && !"".equals(memberList.get(i).getBirth())) {
                    String decryptedBirth = memberList.get(i).getBirth();
                    memberList.get(i).setBirth(aes.decrypt(aeskey, decryptedBirth));
                }

                if(memberList.get(i).getEmail() != null && !"".equals(memberList.get(i).getEmail())) {
                    String decryptedEmail = memberList.get(i).getEmail();
                    memberList.get(i).setEmail(aes.decrypt(aeskey, decryptedEmail));
                }

                if(memberList.get(i).getMobile() != null && !"".equals(memberList.get(i).getMobile())) {
                    String decryptedMobile = memberList.get(i).getMobile();
                    memberList.get(i).setMobile(aes.decrypt(aeskey, decryptedMobile));
                }
            }

        }catch (Exception e) {
            log.error("e : {}", e);
        }

        return memberList;
    }

    public int signup(SignupRequest signupRequest) throws Exception {

        String aeskey = aesKeyConfig.getAesKey();
        
        if(signupRequest.getPassword() != null) {
            signupRequest.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        }

        if(signupRequest.getName() != null && signupRequest.getName() != ""){
            signupRequest.setName(aes.encrypt(aeskey, signupRequest.getName()));
        }

        if(signupRequest.getBirth() != null && signupRequest.getBirth() != ""){
            signupRequest.setBirth(aes.encrypt(aeskey, signupRequest.getBirth()));
        }

        if(signupRequest.getEmail() != null && signupRequest.getEmail() != ""){
            signupRequest.setEmail(aes.encrypt(aeskey, signupRequest.getEmail()));
        }

        if(signupRequest.getMobile() != null && signupRequest.getMobile() != ""){
            signupRequest.setMobile(aes.encrypt(aeskey, signupRequest.getMobile()));
        }

        int result =  memberDao.signup(signupRequest);

        return result;
    }

    public int memberLogin(Member memberRequest) {

        int result = 0;

        Member member = memberDao.memberLogin(memberRequest);

        if(member != null && passwordEncoder.matches(memberRequest.getPassword(), member.getPassword())){
           result = 1;
        }

        return  result;
    }

}
