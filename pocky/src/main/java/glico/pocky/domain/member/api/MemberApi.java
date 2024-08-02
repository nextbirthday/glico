package glico.pocky.domain.member.api;

import glico.pocky.domain.member.application.MemberService;
import glico.pocky.domain.member.domain.Member;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2 (topic = "member")
@RequestMapping("/member")
public class MemberApi {

    private final MemberService memberService;

    @Autowired
    public MemberApi(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping(value = "/list")
    public List<Member> list() {

        List<Member> memberList = memberService.getMemberList();

        return memberList;
    }
}
