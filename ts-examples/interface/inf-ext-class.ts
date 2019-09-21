// interface extends class

class Control {
  public state: any
}

interface Selectable extends Control {
  select (): void
}

class Button extends Control implements Selectable {
  select () {

  }
}

class TextBtn extends Control {
  select () {

  }
}

class ImageBtn implements Selectable {
  state: any
  select () {

  }
}
