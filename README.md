# Dynamic Eventing
A super lightweight way to remove touch event delay on mobile devices, for web & hybrid applications

## The Problem:
If an element is bound with an on 'click' event the browser will wait 300ms before triggering the event.

## The Solution:
Using dynamic eventing, your events will bind to the appropriate 'touchstart' or 'click' event depending on the device of your user.

# Usage
```
var _dynamicEvent = dynamicEvent();

btn.addEventListener(_dynamicEvent ,function() {
    alert("event is : " + _dE);
});
```

# Further Reading:
Codeanthology: http://codeanthology.com/coding/dynamic-eventing/

## Contributing
It doesn't matter if you're a veteran or not. Everyone brings something awesome to the party so please contribute.<br/>
1. Fork it! <br/>
2. Create your feature branch: `git checkout -b my-new-feature` <br/>
3. Commit your changes: `git commit -am 'Add some feature'` <br/>
4. Push to the branch: `git push origin my-new-feature` <br/>
5. Submit a pull request :D <br/>

## Credits
Created and maintained by [@rorykermack](https://twitter.com/@rorykermack)
## License
[WTFPL](http://www.wtfpl.net/) (100% Open Source)
