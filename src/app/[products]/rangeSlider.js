"use client";
import { useRef, useState } from "react";
import "./page.css";
export default function RangeSlider() {
  const fromSliderRef = useRef(null);
  const toSliderRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const controlSliderRef = useRef(null);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(100);

  const controlFromInput = () => {
    const from = parseInt(fromInputRef.current.value, 10);
    const to = parseInt(toInputRef.current.value, 10);
    fillSlider(from, to);
    if (from > to) {
      fromSliderRef.current.value = to;
      fromInputRef.current.value = to;
    } else {
      fromSliderRef.current.value = from;
    }
  };

  const controlToInput = () => {
    const from = parseInt(fromInputRef.current.value, 10);
    const to = parseInt(toInputRef.current.value, 10);
    fillSlider(from, to);
    if (from <= to) {
      toSliderRef.current.value = to;
      toInputRef.current.value = to;
    } else {
      toInputRef.current.value = from;
    }
  };

  const controlFromSlider = () => {
    const from = parseInt(fromSliderRef.current.value, 10);
    const to = parseInt(toSliderRef.current.value, 10);
    fillSlider(from, to);
    if (from > to) {
      fromInputRef.current.value = to;
    } else {
      setFromValue(from);
    }
  };

  const controlToSlider = () => {
    const from = parseInt(fromSliderRef.current.value, 10);
    const to = parseInt(toSliderRef.current.value, 10);
    fillSlider(from, to);
    if (from <= to) {
      setToValue(to);
    } else {
      toInputRef.current.value = from;
      toSliderRef.current.value = from;
    }
  };

  const fillSlider = (from, to) => {
    // Implement fillSlider logic here
  };
  return (
    <div className="range_container">
      <div className="sliders_control">
        <input
          type="range"
          id="fromSlider"
          ref={fromSliderRef}
          min="0"
          max="100"
          value={fromValue}
          onChange={controlFromSlider}
        />
        <input
          type="range"
          id="toSlider"
          ref={toSliderRef}
          min="0"
          max="100"
          value={toValue}
          onChange={controlToSlider}
        />
      </div>
      <div className="form_control">
        <div className="form_control_container">
          <div className="form_control_container__time">Min Price</div>
          <div className="flex justify-between items-center text-sm text-tGray w-20 h-8 border-2 border-borderC p-2 rounded-2xl">
            <input
              type="number"
              id="fromInput"
              ref={fromInputRef}
              value={fromValue}
              onChange={controlFromInput}
            />
            <p>$</p>
          </div>
        </div>
        <div className="form_control_container">
          <div className="form_control_container__time">Max Price</div>
          <div className="flex justify-between items-center text-sm text-tGray w-20 h-8 border-2 border-borderC p-2 rounded-2xl">
            <input
              type="number"
              id="toInput"
              ref={toInputRef}
              value={toValue}
              onChange={controlToInput}
            />
            <p>$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
