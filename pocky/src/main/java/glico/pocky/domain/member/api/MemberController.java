package glico.pocky.domain.member.api;

import glico.pocky.domain.member.application.MemberService;
import glico.pocky.domain.member.domain.Member;
import glico.pocky.domain.member.dto.SignupRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@Log4j2(topic = "member")
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping(value = "")
    public String member(Model model) {

        List<Member> memberList = memberService.getMemberList();

        model.addAttribute("memberList", memberList);

        return "pages/member/memberList";
    }

    @PostMapping(value = "/signup")
    public int signup(@RequestBody SignupRequest signupRequest) throws Exception {

        int result = memberService.signup(signupRequest);

        return result;
    }

    @PostMapping(value = "/login")
    public int login(@RequestBody Member memberRequest) {

        int result = memberService.memberLogin(memberRequest);

        return result;
    }

}
