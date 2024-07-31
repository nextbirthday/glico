package glico.pocky.domain.member.api;

import glico.pocky.domain.member.application.MemberService;
import glico.pocky.domain.member.domain.Member;
import glico.pocky.domain.member.dto.SignupRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@Log4j2 (topic = "member")
@RequestMapping("/member")
public class MemberApi {

    // @Autowired
    // private MemberService memberService;
    private final MemberService memberService;

    @Autowired
    public MemberApi(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping (value = "")
    public ModelAndView member() {
        ModelAndView modelAndView = new ModelAndView();
        List<Member> memberList = memberService.getMemberList();

        modelAndView.addObject("memberList", memberList);
        modelAndView.setViewName("pages/member/memberList");

        return modelAndView;
    }

    @GetMapping (value = "/list")
    public List<Member> list() {

        List<Member> memberList = memberService.getMemberList();

        log.info("memberList : {}", memberList);
        
        return memberList;
    }

    @PostMapping(value = "/signup")
    public String signup(@RequestBody SignupRequest signupRequest) throws Exception {

        int result = memberService.signup(signupRequest);

        return String.valueOf(result);
    }

    @PostMapping(value = "/login")
    public Member login(@RequestBody Member memberRequest){

        Member member = memberService.memberLogin(memberRequest);

        return member;
    }
}
