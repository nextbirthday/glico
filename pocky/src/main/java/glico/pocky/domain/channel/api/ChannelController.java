package glico.pocky.domain.channel.api;

import glico.pocky.domain.channel.application.ChannelService;
import glico.pocky.domain.channel.domain.Channel;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@Log4j2(topic = "channel")
@RequestMapping("/channel")
public class ChannelController {
    private final ChannelService channelService;

    @Autowired
    public ChannelController(ChannelService channelService) {
        this.channelService = channelService;
    }

    @GetMapping("")
    public String showChannelList(Model model) {

        List<Channel> channelList = channelService.getChannelList();

        model.addAttribute("channelList", channelList);

        return "pages/channel/channelList";
    }

    @GetMapping("/{channelSlug}")
    public String showChannelItem(@PathVariable("channelSlug") String channelSlug, Model model) {

            Channel channel = channelService.getChannelById(channelSlug);

            model.addAttribute("channel", channel);

            return "pages/channel/channelItem";
    }

}
