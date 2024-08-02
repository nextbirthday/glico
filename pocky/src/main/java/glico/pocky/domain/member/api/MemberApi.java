package glico.pocky.domain.member.api;

import glico.pocky.domain.member.application.MemberService;
import glico.pocky.domain.member.domain.Member;
import glico.pocky.domain.member.dto.SignupRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

//    @GetMapping (value = "")
//    public ModelAndView member() {
//        ModelAndView modelAndView = new ModelAndView();
//        List<Member> memberList = memberService.getMemberList();
//
//        modelAndView.addObject("memberList", memberList);
//        modelAndView.setViewName("pages/member/memberList");
//
//        return modelAndView;
//    }

    @GetMapping (value = "")
    public String member(Model model) {
        //ModelAndView modelAndView = new ModelAndView();
        List<Member> memberList = memberService.getMemberList();

        model.addAttribute("memberList", memberList);
        return "pages/member/memberList";
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
    public int login(@RequestBody Member memberRequest){

        int result = memberService.memberLogin(memberRequest);

        return result;
    }
}
