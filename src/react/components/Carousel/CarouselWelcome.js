import React, { Component } from "react";
import YouTube from "react-youtube";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const content = {
  opts: {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      showinfo: 0,
      modestbranding: 1,
      rel: 0
    }
  },
  videos: [
    {
      videoId: "3fuToGPniVE",
      captionHeader: "Search for commands using filters"
    },
    {
      videoId: "7Rt3uGW5_fo",
      captionHeader:
        "View details of a command and different applications of a program"
    },
    {
      videoId: "Eup0TQncu98",
      captionHeader: "Browse documentation that explains how to use a program"
    }
  ]
};

class CarouselWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === content.videos.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? content.videos.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = content.videos.map((v, idx) => {
      return (
        <CarouselItem
          onExiti={this.onExiting}
          onExited={this.onExited}
          key={idx}
        >
          <div className="youtube-iframe-wrapper">
            <h5>{v.captionHeader}</h5>
            <YouTube videoId={v.videoId} opts={{ ...content.opts }} />
          </div>
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        <CarouselIndicators
          items={content.videos}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CarouselWelcome;
