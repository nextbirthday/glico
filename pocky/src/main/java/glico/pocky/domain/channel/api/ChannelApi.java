package glico.pocky.domain.channel.api;

import glico.pocky.domain.channel.application.ChannelService;
import glico.pocky.domain.channel.domain.Channel;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Log4j2(topic = "channel")
@RequestMapping("/channel")
public class ChannelApi {
    private final ChannelService channelService;

    @Autowired
    public ChannelApi(ChannelService channelService) {
        this.channelService = channelService;
    }

    @GetMapping(value = "/insertChannel")
    public String channelInsert() {
        return "channelList";
    }

    @GetMapping(value = "/updateChannel")
    public String channelUpdate() {
        return "channelList";
    }

}
