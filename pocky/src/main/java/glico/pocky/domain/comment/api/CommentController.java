package glico.pocky.domain.comment.api;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@Log4j2(topic = "comment")
@RequestMapping("/comment")
public class CommentController {
}
