


<div class='full-page-mobile-section gap'>
    <span class='text-label'>SPONSORS</span>
    <span class='text-label flash'>ROBERT COCUZ</span>
    <div class='sponsor-img spin'></div>
    <span class='text-label'>PRIMARIA TULNICI</span>
    <span class='text-label'>CSIKI SOR</span>

</div>


<style>
    .text-label{
        font-family: 'Londrina solid';
        font-size: 2rem;
        text-align: center;
        margin-bottom: 4px;
        min-height: 2.5rem;
    }

    .gap{
        gap:25px;
    }


    .flash{
        animation: flash 0.2s infinite;
    }

    .spin{
        animation: spin 2.5s infinite;
    }

    .sponsor-img{
        background-image: url('../images/cocuz_doarme.jpeg');
        width: 200px;
        height: 250px;
        background-size:cover;
        border-radius: 25px;
    }

    @keyframes flash {
    50% {font-size: 1rem;  color: red;}
    }


    @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>