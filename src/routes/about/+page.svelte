<script>
    import QuestionsAscii from "$lib/components/ASCII/QuestionsASCII.svelte";
    import AboutAscii from "$lib/components/ASCII/AboutASCII.svelte";
    import MarqueeTextWidget from 'svelte-marquee-text-widget';
</script>
<div style="padding-bottom: 3rem;">
    <div class="ascii">
        <AboutAscii />
    </div>
    <p>Networking:Acker is a digital and interactive component to my research exploring Kathy Acker's networks.</p>
</div>

<div>
    <div class="ascii">
        <QuestionsAscii />
    </div>
    <p>How is character comprised by networks (fictional and “non-fictional”)?</p>
    <p>Are networks “subjective” or are they self-standing in their own right?</p> 
    <p>How have Networks been analysed, and to what purpose?</p> 
    <p>How does the “network” suggest “text” to Acker’s works, or alternately, how does “text” suggest “network”? What is “narrative identity” itself, as a concept of identity formation and how does it relate to narrative modes in literature?</p>
</div>

<style>
    div.ascii{
        overflow: hidden;
        width: 90vw;
    }
</style>