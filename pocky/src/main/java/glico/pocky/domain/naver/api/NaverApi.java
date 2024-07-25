package glico.pocky.domain.naver.api;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2(topic = "naver")
@RequestMapping("/naver")
public class NaverApi {

    @GetMapping("/login")
    public String naverLogin (@RequestParam String code, String state) {

        return "naver_login";
    }
}
