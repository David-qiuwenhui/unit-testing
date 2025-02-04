import { describe, vi, expect, it } from "vitest";
import { Car } from "./Car";
import { Engine } from "./engine";

describe("car", () => {
  it("should start ", () => {
    const engine = new Engine();
    // test double
    Engine.prototype.start = vi.fn();
    const car = new Car(engine);
    car.start();

    expect(Engine.prototype.start).toBeCalled();
  });
});
