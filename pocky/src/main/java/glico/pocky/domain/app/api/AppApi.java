package glico.pocky.domain.app.api;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Log4j2
@Controller
public class AppApi {

    @GetMapping("/home")
    public String index(){

        log.info("asd");
        return "thymeleaf/home";
    }
}
