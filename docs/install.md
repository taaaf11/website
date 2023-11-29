---
title: Install Flet
sidebar_label: Install Flet
---

Flet requires Python 3.8 or above. To start with Flet, you need to install `flet` module first:

```bash
pip install flet
```

:::note
To upgrade `flet` module run:

```bash
pip install flet --upgrade
```
:::

To install Flet pre-release (for advanced users) run:

```bash
pip install flet --pre
```

:::caution
We recommend installing pre-release builds into a virtual environment.
:::

## Linux

Running Flet apps on Linux and WSL requires [GStreamer](https://gstreamer.freedesktop.org/) libraries installed. Most probably you already have them in your system, but if you are getting `error while loading shared libraries: libgstapp-1.0.so.0: cannot open shared object file: No such file or directory` while running Flet app then you need to install GStreamer.

To install GStreamer on Ubuntu/Debian run the following commands:

```
sudo apt-get update
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-doc gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

See [this guide](https://gstreamer.freedesktop.org/documentation/installing/on-linux.html?gi-language=c) for installing on other Linux distributives.

## WSL

Flet apps can be run on WSL2. If you are getting `cannot open display` error [following this guide](https://github.com/microsoft/wslg/wiki/Diagnosing-%22cannot-open-display%22-type-issues-with-WSLg) for troubleshooting.