package glico.pocky.domain.channel.api;

import glico.pocky.domain.channel.application.ChannelService;
import glico.pocky.domain.channel.domain.Channel;
import glico.pocky.domain.member.application.MemberService;
import glico.pocky.domain.member.domain.Member;
import glico.pocky.domain.member.dto.SignupRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2(topic = "channel")
@RestController
@RequestMapping("/channel")
public class ChannelApi {

    private final ChannelService channelService;

    @Autowired
    public ChannelApi(ChannelService channelService) {
        this.channelService = channelService;
    }

    @GetMapping(value = "/list")
    public String channelList() {
        log.debug("channelList");
        return "channelList";
    }

    @PostMapping(value = "/item")
    public String channelItem(@RequestBody Channel channel) {
        log.info("channel : {}", channel);
        log.debug("channelItem");
        return "channelList";
    }
}
