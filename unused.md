```scss
.switch {
  display: inline-block;
  position: relative;
  width: 90px;
  height: 34px;
  // background-color: blue;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    // border: 1px ;

    &::before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: #fff;
      transition: 0.4s;
    }

    &::after {
      content: "Dark Mode";
      position: absolute;
      top: 50%;
      right: 0;
      font-size: 15px;
      transform: translateY(-50%);
    }

    &.round {
      border-radius: 34px;
    }

    &.round::before {
      border-radius: 50%;
      box-shadow: inset 5px -3px 0 1px #000;
    }
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider::before {
    -webkit-transform: translateX(52px);
    -ms-transform: translateX(52px);
    transform: translateX(52px);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
}
```

```html
<label class="switch">
  <input type="checkbox" id="" checked />
  <span class="slider round"></span>
</label>
```
